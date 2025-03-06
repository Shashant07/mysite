import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors';

import users from './data/users.js';
import products from './data/products.js';
import services from './data/services.js';
import messages from './data/messages.js';

import User from './models/userModel.js';
import Product from './models/productModel.js';
import Service from './models/serviceModel.js'
import Order from './models/orderModel.js';
import Message from './models/messageModel.js';

import connectDB from './config/db.js';

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await Service.deleteMany();
    await User.deleteMany();
    await Message.deleteMany();

    const createdUsers = await User.insertMany(users);

    const adminUser = createdUsers[0]._id;

    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser };
    });

    const sampleServices = services.map((service) => {
      return { ...service, user: adminUser };
    });

    const sampleMessages = messages.map((message) => {
      return { ...message, user: adminUser };
    });

    await Product.insertMany(sampleProducts);
    await Service.insertMany(sampleServices);
    await Message.insertMany(sampleMessages);

    console.log('Data Imported!'.green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await Service.deleteMany();
    await User.deleteMany();
    await Message.deleteMany();

    console.log('Data Destroyed!'.red.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}

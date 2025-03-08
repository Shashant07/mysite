import React, { useEffect } from 'react';
import { Table, Button, Container } from 'react-bootstrap';
import { FaTrash, FaEdit} from 'react-icons/fa';
import Message from '../../components/Message';
import Loader from '../../components/Loader';
import {
  useDeleteMessageMutation,
  useGetMessagesQuery,
} from '../../slices/messagesApiSlice';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const MessageListScreen = () => {
  const { data: messages, refetch, isLoading, error } = useGetMessagesQuery();

  const [deleteMessage] = useDeleteMessageMutation();

  const deleteHandler = async (id) => {
    if (window.confirm('Are you sure')) {
      try {
        await deleteMessage(id);
        refetch();
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }
  };

  return (
    <Container>
      <h1 className="card-title" style={{ fontWeight: "bold", letterSpacing: "2px", margin: "20px 0" }}>Messages</h1>
                    
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <Table striped bordered hover responsive className='table-sm'>
          <thead>
            <tr>
              <th>Date</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>Subject</th>
              <th>Message</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {messages.map((message) => (
              <tr key={message._id}>
                <td>
                  {new Date(message.createdAt).toLocaleString("en-IN", { year: "numeric", month: "long", day: "numeric", hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: true, timeZone: "Asia/Kolkata" })}
                </td>
                <td>{message.name}</td>
                <td>
                  <a href={`mailto:${message.email}`}>{message.email}</a>
                </td>
                <td>{message.subject}</td>
                <td>{message.description}</td>
                <td>
                  {/* {!message.isAdmin && ( */}
                      <Button
                        variant='danger'
                        className='btn-sm'
                        onClick={() => deleteHandler(message._id)}
                      >
                        <FaTrash style={{ color: 'white' }} />
                      </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  );
};

export default MessageListScreen;

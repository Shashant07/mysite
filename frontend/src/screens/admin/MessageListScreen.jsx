import React from 'react';
import { Table, Button } from 'react-bootstrap';
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
    <>
      <h1>Messages</h1>
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
              <th>ID</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>Subject</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {messages.map((message) => (
              <tr key={message._id}>
                <td>{message._id}</td>
                <td>{message.name}</td>
                <td>
                  <a href={`mailto:${message.email}`}>{message.email}</a>
                </td>
                <td>{message.subject}</td>
                <td>
                  {/* {!message.isAdmin && ( */}
                    {/* <> */}
                      <Button
                        as={Link}
                        to={`/admin/message/${message._id}/edit`}
                        style={{ marginRight: '10px' }}
                        variant='light'
                        className='btn-sm'
                      >
                        <FaEdit />
                      </Button>
                      <Button
                        variant='danger'
                        className='btn-sm'
                        onClick={() => deleteHandler(message._id)}
                      >
                        <FaTrash style={{ color: 'white' }} />
                      </Button>
                    {/* </>
                  )} */}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
};

export default MessageListScreen;

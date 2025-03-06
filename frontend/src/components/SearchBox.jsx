import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import '../assets/styles/searchBox.css';

const SearchBox = () => {
  const navigate = useNavigate();
  const { keyword: urlKeyword } = useParams();

  // FIX: uncontrolled input - urlKeyword may be undefined
  const [keyword, setKeyword] = useState(urlKeyword || '');

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword) {
      navigate(`/search/${keyword.trim()}`);
      setKeyword('');
    }
  };

  return (
    <Form onSubmit={submitHandler} className='search-box'>
      <Button type='submit' variant='outline-secondery' className='btn-search'>
        <FaSearch />
      </Button>
      <Form.Control
        type='text'
        name='q'
        onChange={(e) => setKeyword(e.target.value)}
        value={keyword}
        placeholder='Search Products/Services...'
        className='input-search'
      ></Form.Control>
    </Form>
  );
};

export default SearchBox;

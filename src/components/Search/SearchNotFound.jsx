import React, { useState, useEffect, useRef } from 'react';
import { Box, Divider, IconButton, InputBase, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import { useTheme } from '@emotion/react'; // Make sure to import useTheme from emotion/react
import styled from '@emotion/styled';

const inputStyleNav = {
  height: '46px',
  border: '1px solid black', // Transparent border initially
  borderBottom: '2px solid #111', // Bottom border color
  borderRadius: '10px',
  alignItems: 'center',
  padding: '0 10px',
  margin: '0 10px',
  width: '600px',
};

const SearchNotFound = () => {
  const [searchValue, setSearchValue] = useState('');
  const [isBoxVisible, setIsBoxVisible] = useState(false);
  const [isInputFocused, setIsInputFocused] = useState(false);

  const theme = useTheme();
  const boxRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (boxRef.current && !boxRef.current.contains(event.target)) {
        setIsBoxVisible(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleClear = () => {
    setSearchValue('');
  };

  const handleInputFocus = () => {
    setIsInputFocused(true);
  };

  const handleInputBlur = () => {
    setIsInputFocused(false);
  };

  return (
    <Box>
      
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
       
        }}
      >
        <Typography
          sx={{
            fontSize: '24px',
            fontWeight: 'bold',
            color: '#111',
            fontFamily: 'Helvetica, sans-serif',
            marginBottom: '10px',
          }}
        >
          LO SENTIMOS, NO HAY NINGÚN RESULTADO PARA "ASDASDASD".
        </Typography>
        <Typography
          sx={{
            fontSize: '16px',
            fontWeight: '500',
            color: '#111',
            fontFamily: 'Helvetica, sans-serif',
            textAlign: 'center',
            marginTop:'-12px'
          }}
        >
          ¡No te desanimes! Revisa el texto o intenta buscar algo menos específico.
        </Typography>
        <Box sx={{ marginTop: '20px' }} ref={boxRef}>
          <IconButton disableRipple>
            <InputBase
              placeholder=" Search..."
              value={searchValue}
              onChange={handleChange}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
              sx={{
                ...inputStyleNav,
                borderBottomColor: isInputFocused ? 'red' : '#111', // Change bottom border color on focus
              }}
              startAdornment={<SearchIcon style={{ color: 'black', marginRight: '12px' }} />}
              endAdornment={
                searchValue && (
                  <ClearIcon
                    onClick={handleClear}
                    style={{ color: 'black', cursor: 'pointer', marginRight: '24px' }}
                  />
                )
              }
            />
          </IconButton>
        </Box>
      </Box>

      <Box sx={{marginBottom:'12px', marginTop:'6px'}} >
        <Typography
          sx={{
            fontSize: '16px',
            fontWeight: '500',
            color: '#111',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontFamily: 'Helvetica, sans-serif',
       
          }}
        >
          Por otra parte, puedes buscar inspiración más abajo:
        </Typography>
      </Box>
      <Box
      sx={{
     
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
      }}
    >
      <Divider sx={{ borderColor: '#9e9e9e', marginBottom:'24px',width:'60%',display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',}} />
    </Box>
    </Box>
  );
};

export default SearchNotFound;

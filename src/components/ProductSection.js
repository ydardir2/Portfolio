import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './ProductSection.css';


function ProductSection() {
    return (
      <div className='product-container'>
        <h1>My Projects</h1>
        <p>Below are my current projects and projects that are in project</p>
        <div className='product-btns'>
          <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
          >
            Contact Me
          </Button>
        </div>
      </div>
    );
  }
  
export default ProductSection;

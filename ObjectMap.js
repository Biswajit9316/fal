import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import deleteicon from '../assets/images/delete.png';
import editicon from '../assets/images/edit.png';
import addRow from '../assets/images/add.png';
import save from '../assets/images/save.png';
import axios from "axios";
import { useEffect } from "react";
import ObjectMapComponent from "./ObjectMapComponent";

const ObjectMap = () => {
  return (
    <div>
      {/* Header */}

      <h5 style={{ marginLeft: '6.5%', fontWeight: '600', marginTop:'15px' }}>
        <a
            href="/ProjectList"
            style={{ textDecoration: 'none', color: 'purple' }}
            onMouseEnter={(e) => {e.target.style.textDecoration = 'underline';}}
            onMouseLeave={(e) => {e.target.style.textDecoration = 'none';}}
        >
            Project List
        </a>
        &nbsp;&nbsp;/&nbsp;&nbsp;
        <a
            href="/ProjectPage"
            onClick={() => window.location.reload()}
            style={{ textDecoration: 'none', color: 'purple' }}
            onMouseEnter={(e) => {
            e.target.style.textDecoration = 'underline';
            }}
            onMouseLeave={(e) => {
            e.target.style.textDecoration = 'none';
            }}
        >
            Project name
        </a>
        &nbsp;&nbsp;/&nbsp;&nbsp;
        <a
            href="#"
            onClick={() => window.location.reload()}
            style={{ textDecoration: 'none', color: '#000' }}
            onMouseEnter={(e) => {
            e.target.style.textDecoration = 'underline';
            e.target.style.color = 'purple';
            }}
            onMouseLeave={(e) => {
            e.target.style.textDecoration = 'none';
            e.target.style.color = '#000';
            }}
        >
            Object Map
        </a>
        &nbsp;&nbsp;/&nbsp;&nbsp;
        </h5>

      {/* Header */}
      <ObjectMapComponent />
    </div>
  );
}

export default ObjectMap;

import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {

  return (
    <footer
      style={{
        background:'black',
  
        color: 'white',
        padding: '50px 0 20px 0',
        marginTop: '150px',
        borderTop: '1px solid rgba(255,255,255,0.1)'
      }}
    >

      <div className="container">

        <div className="row align-items-start">

          {/* Left Section */}
          <div className="col-lg-6 mb-4">

            <Link
              to="/"
              style={{
                textDecoration: 'none',
                color: 'white'
              }}
            >
              <h1
                style={{
                  fontSize: '38px',
                  fontWeight: '800',
                  letterSpacing: '1px',
                  marginBottom: '15px'
                }}
              >
                Ellora Lives
              </h1>
            </Link>

            <p
              style={{
                maxWidth: '500px',
                lineHeight: '1.8',
                color: '#cbd5e1',
                fontSize: '16px'
              }}
            >
              A modern community management platform that helps residents
              connect, communicate, and manage society activities efficiently.
            </p>

          </div>

          {/* Right Section */}
          <div className="col-lg-6 text-lg-end">

            <h5
              style={{
                marginBottom: '20px',
                fontWeight: '600',
                color: '#f8fafc'
              }}
            >
              Quick Links
            </h5>

            <ul
              style={{
                listStyle: 'none',
                padding: 0
              }}
            >

              <li style={{ marginBottom: '10px' }}>
                <Link to="/privacy" style={linkStyle}>
                  Privacy Policy
                </Link>
              </li>

              <li style={{ marginBottom: '10px' }}>
                <Link to="/terms" style={linkStyle}>
                  Terms & Conditions
                </Link>
              </li>

              <li style={{ marginBottom: '10px' }}>
                <Link to="/contact" style={linkStyle}>
                  Contact Us
                </Link>
              </li>

            </ul>

          </div>

        </div>

        {/* Bottom Line */}
        <hr
          style={{
            borderColor: 'rgba(255,255,255,0.1)',
            margin: '30px 0 20px'
          }}
        />

        <div
          className="text-center"
          style={{
            color: '#94a3b8',
            fontSize: '14px'
          }}
        >
          © 2025 Ellora Lives. All rights reserved.
        </div>

      </div>

    </footer>
  )
}

const linkStyle = {
  color: '#cbd5e1',
  textDecoration: 'none',
  fontSize: '16px',
  transition: '0.3s'
}

export default Footer
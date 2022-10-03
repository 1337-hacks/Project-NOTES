import React from 'react';
import Container from 'react-bootstrap/Container';

function Footer() {
    const year = new Date().getFullYear();
    return (
        <Container>
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <p>Copyright ⓒ {year}</p>
            </footer>
        </Container>
    );
}

export default Footer;
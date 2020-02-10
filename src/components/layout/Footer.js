import React from 'react';

function Footer() {
    return(
      <div>
        <div className="row">
          <div className="col-md-12">
              <div className="footer p-3 mt-4 text-center bg-dark text-light">
                  Doveloepd & Maintaineed By :
                  <span className="text-warning font-weight-normal">
                      Rohit Krishnasai 
                  </span>
                  , Using <i className="fab fa-react" />ReactJS &amp; Redux JS ,
                  Github Link:
                  <a href="https://github.com/rohitkrishna455" target="_blank" rel="noopener noreferrer">
                       rohitkrishna455
                   </a>
              </div>
          </div>
        </div>
      </div>
      );
}

export default Footer;
import React from "react";
import { Dropdown, Button, ButtonGroup, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";

export default function Arrows() {
  return (
    <>
      <div className="arrows-bar" style={{ height: "2rem" }}>
        <div className="arrows">
          <Link className='mr-2' to="/">
            <AiFillLeftCircle size="2rem" />
          </Link>
          <Link to="/">
            <AiFillRightCircle size="2rem" />
          </Link>
        </div>
        {/* DROPDOWN */}
        <Dropdown as={ButtonGroup} className='profileDrop'>
          <Link className="btn btn-sm d-flex text-muted align-content-center p-0" to="/login/">
            <img src="https://lh3.googleusercontent.com/ogw/ADea4I7NdUQqN60ymDYgkf7lQNrG6qp5w6EiInjsHnUnmw=s83-c-mo" class="" alt="" />
            <span class="">Ian</span>
          </Link>

          <Dropdown.Toggle split id="dropdownLogin" />
          <Dropdown.Menu>
            <Link className='dropdown-item' to="/settings">Settings</Link>
            <Link className='dropdown-item' to="/">Action</Link>
            <Link className='dropdown-item' to="/">Action</Link>

          </Dropdown.Menu>
        </Dropdown>
      </div>
      {/* <div class="d-flex w-100 justify-content-between w-100 align-content-center">
        <!-- arrows -->
        <div class="col-2 d-flex justify-content-start main-arrows">
          <a class="arr-act mr-3" href="#">
            <i class="fas fa-chevron-circle-left"></i>
          </a>
          <a href="#">
            <i class="fas fa-chevron-circle-right"></i>
          </a>
        </div>
        {/* <!-- space col -->
        <!-- login acc --> */}
      {/* <div class="col-1 d-flex justify-content-end">
          <div class="btn-group log-but-par">
            <a
              href="index.html"
              class="btn btn-sm login-buttn d-flex"
              type="button"
            >
              <img src="" class="mr-2" alt="" />
              <span class=""> Diego </span>
            </a>
            <button
              type="button"
              class="btn btn-sm press-buttn dropdown-toggle dropdown-toggle-split"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span class="sr-only">Toggle Dropdown</span>
            </button>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="#">
                Settings
              </a>
              <a class="dropdown-item" href="#">
                Payment
              </a>
              <a class="dropdown-item" href="#">
                Premium
              </a>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}

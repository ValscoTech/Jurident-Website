import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const TrendingItem = ({ trending }) => {
  return (
    <div>
      <div className="p-4">
        <div className="lighter-text-content text-center md:text-left md:flex md:items-center">
          <div className="md:mr-4" style={{ fontSize: "50px" }}>
            {trending.id}
          </div>
          <div className="md:m-2 text-left">
            <p className="lighter-text-heading">{trending.heading}</p>
            <Link to={`/Blogs/${trending.topic}`} className="bold-content-grid">
              {trending.content}
            </Link>
            <div className="md:flex md:justify-between lighter-text-content md:mt-2">
              <p>{trending.timing}</p>
              <p className="bold-content text-dark">{trending.date}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

TrendingItem.propTypes = {
  trending: PropTypes.object.isRequired,
};

export default TrendingItem;

import React from "react";

function Error() {
  return (
    <div className="container">
      <div className="error">
        <h1>404 Page not Found </h1>
        <p className="size">This site can’t be reached</p>
        <p className="size">DNS_PROBE_FINISHED_NXDOMAIN</p>
      </div>
    </div>
  );
}

export default Error;

import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "./Modal.css";

const DetailsModal = ({ lgShow, setLgShow, selected }) => {
  return (
    <Modal
      size="lg"
      centered
      show={lgShow}
      onHide={() => setLgShow(false)}
      className="custom-modal"
    >
      <Modal.Header closeButton className="border-0">
        <Modal.Title className="fw-bold">
          {selected.title}
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div className="row g-4 align-items-center">
          
          {/* Image */}
          <div className="col-md-5">
            <img
              src={`https://image.tmdb.org/t/p/w500/${selected.poster_path}`}
              alt={selected.title}
              className="img-fluid rounded shadow-sm modal-img"
            />
          </div>

          {/* Details */}
          <div className="col-md-7">
            <h6 className="text-muted mb-2">Overview</h6>
            <p className="modal-text">
              {selected.overview || "No description available."}
            </p>

            <div className="mt-3">
              <span className="badge bg-success me-2">
                ⭐ {selected.vote_average}
              </span>
              <span className="text-muted">
                {selected.release_date}
              </span>
            </div>

            <Button
              variant="success"
              className="mt-4 w-100"
              onClick={() => setLgShow(false)}
            >
              Close
            </Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default DetailsModal;
class AppError extends Error {
    constructor(message, statusCode) {
      super(message);
      this.statusCode = statusCode;
      this.isOperational = true;
    }
  }
  
  // Centralized Error Handling Middleware
  const errorHandler = (err, req, res, next) => {
    // Default error message and status code
    let message = "Internal Server Error";
    let statusCode = 500;
  
    // Handle known errors
    if (err.isOperational) {
      message = err.message;
      statusCode = err.statusCode;
    }
  
    // Log the error
    console.error(err);
  
    // Send the error response
    res.status(statusCode).json({ error: message });
  };
  
  module.exports = {
    AppError, 
    errorHandler
  }
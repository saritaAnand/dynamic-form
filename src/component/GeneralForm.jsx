const GeneralInput = () => {
  return (
    <form>
      <div className="form-control">
        <label htmlFor="email">Your Email</label>
        <input type="email" id="email" />
      </div>
      <div className="form-control">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default GeneralInput;

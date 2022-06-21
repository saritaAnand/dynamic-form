const Select = () => {
  return (
    <>
      <label for="color-choice">Choose Color:</label>
      <input
        list="redColors"
        id="color-choice"
        name="color-choice"
        className="form-control"
        type="color"
      />
      <select multiple>
        <datalist id="redColors">
          <option value="#800000" />
          <option value="#8B0000" />
          <option value="#A52A2A" />
          <option vvalue="#DC143C" />
          <option value="000" />
        </datalist>
      </select>
    </>
  );
};

export default Select;

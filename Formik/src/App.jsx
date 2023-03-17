import Form from "./components/Form";

function App() {
  const onSubmit = (values) => {
    console.log(values);
  };
  return (
    <div>
      <Form
        onSubmit={onSubmit}
        initialState={{ text: "Ahora desde App", email: "test@test.com" }}
      >
        {({ values, handleChange, handleSubmit }) => (
          <form onSubmit={(e) => handleSubmit(e)}>
            <div>
              <input
                type="text"
                placeholder="text"
                value={values.text}
                name="text"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="text"
                value={values.email}
                name="email"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div>
              <button type="submit">Submit</button>
            </div>
          </form>
        )}
      </Form>
    </div>
  );
}

export default App;

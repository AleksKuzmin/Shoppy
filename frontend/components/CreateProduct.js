import useForm from '../lib/useForm';

export default function CreateProduct() {
  const { inputs, handleChange } = useForm({
      name: 'Nice shoes',
      price: 23433,
      
  });
  return (
    <form>
      <label htmlFor="name">
        Name
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          value={inputs.name}
          onChange={handleChange}
        />
      </label>
      {/* <label htmlFor="name">
        Name
        <input
          type="text"
          id="name"
          name="name" 
          placeholder="Name"
          value={name}
          onChange={(e) => {
            console.log(e.target.value);
            setName(e.target.value);
          }}
        />
      </label> */}
    </form>
  );
}

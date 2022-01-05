import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Contact() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = () => {
    toast("Thank you for Contacting Us, We'll response back in 24hrs", {
      position: "top-right",
      autoClose: 5000,
    });
    reset();
  };

  const goBack = () => {
    navigate("/");
  };

  return (
    <main className="contact-container">
      <section>
        <button onClick={() => goBack()} className="back">
          Go Back
        </button>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="contact">
            <h1>Contact Us</h1>
            <p>Please fill this form in a decent manner</p>
          </div>
          <div className="name">
            <h2>Full Name:</h2>
            <input
              id="fullname"
              type="text"
              {...register("fullname", {
                required: true,
                minLength: 3,
                maxLength: 15,
              })}
            ></input>
            {errors.fullname && (
              <span style={{ color: "red" }}>
                Please Enter your full name and must between 3-15 characters.
              </span>
            )}
          </div>
          <div className="email">
            <h2>E-mail:</h2>
            <input
              type="text"
              {...register("email", {
                required: true,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                },
              })}
            ></input>
            <p>example@example.com</p>
          </div>
          {errors.email && (
            <span style={{ color: "red" }}>Please a valid email address</span>
          )}
          <div className="message">
            <h2>Message:</h2>
            <textarea {...register("message", { required: true })}></textarea>
          </div>
          {errors.message && (
            <span style={{ color: "red" }}>Please enter your message</span>
          )}
          <div className="button">
            <button>Submit</button>
          </div>
        </form>
      </section>
    </main>
  );
}

export default Contact;

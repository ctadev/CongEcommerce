import React from "react";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";

function Footer() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const notify = () => {
    toast("Thanks for Subscribing", {
      position: "bottom-right",
      autoClose: 1500,
    });
    reset();
  };

  return (
    <footer>
      <section className="subscribe">
        <h1>Newsletter</h1>
        <p>Get timely updates from your favorite products</p>
        <div>
          <form onSubmit={handleSubmit(notify)}>
            <input
              {...register("email", {
                required: true,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                },
              })}
              type="text"
              placeholder="Your email"
            />
            <button>Subscribe</button>
            {errors.email && (
              <span style={{ color: "red", display: "block" }}>
                Please a valid email address
              </span>
            )}
          </form>
        </div>
      </section>
      <section className="social-media">
        <i className="fab fa-facebook-square"></i>
        <i className="fab fa-twitter-square"></i>
        <i className="fab fa-instagram"></i>
      </section>
    </footer>
  );
}

export default Footer;

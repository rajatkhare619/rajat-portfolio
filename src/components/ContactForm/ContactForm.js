import React from "react";
import { useForm } from "@formspree/react";
import { FormControl } from "baseui/form-control";
import { Textarea } from "baseui/textarea";
import { style } from "glamor";

import "./ContactForm.css";

function ContactForm({ theme }) {
  const styles = style({
    backgroundColor: `${theme.accentBright}`,
    ":hover": {
      boxShadow: `0 5px 15px ${theme.accentBright}`,
    },
  });
  const [state, handleSubmit] = useForm("xyylooyq");
  const [value, setValue] = React.useState("");

  if (state.succeeded) {
    return <p className="send-success">Message sent!</p>;
  }
  return (
    <form onSubmit={handleSubmit}>
      <FormControl
        label={() => "Enter your message:"}
        overrides={{
          Label: {
            style: ({ $theme }) => ({
              color: styles.backgroundColor,
            }),
          },
        }}
      >
        <Textarea
          overrides={{
            InputContainer: {
              style: ({ $theme }) => ({
                backgroundColor: theme.body,
              }),
            },
            Input: {
              style: ({ $theme }) => ({
                backgroundColor: theme.body,
                color: theme.text,
              }),
            },
          }}
          autoFocus
          id="message"
          name="message"
          value={value}
          placeholder="Hey Rajat! I'd like to hire you. Let's talk."
          onChange={(event) => setValue(event.currentTarget.value)}
        />
      </FormControl>
      <FormControl>
        <button
          type="submit"
          disabled={state.submitting || !value}
          {...styles}
          className="button"
        >
          Send
        </button>
      </FormControl>
    </form>
  );
}

export default ContactForm;

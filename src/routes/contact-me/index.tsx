import { FileRoute } from "@tanstack/react-router";
import { Field, UpdaterFn, useForm } from "@tanstack/react-form";
import {
  FieldError,
  Input,
  Label,
  TextArea,
  TextField,
} from "react-aria-components";

export const Route = new FileRoute('/contact-me/').createRoute({
  component: ContactMe,
});

interface ContactMeForm {
  name: string,
  email: string
}

export default function ContactMe() {
  const form = useForm<ContactMeForm>({
    onSubmit: async ({ value }) => {
      // Do something with form data
      console.log(value);
    },
  });

  return (
    <div className="flex min-h-screen items-center justify-around gap-8">
      <div className="pt-24 text-6xl font-bold underline underline-offset-8">
        Contact me
      </div>
      <form.Provider>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
            void form.handleSubmit();
          }}
        >
          <Field
            name="name"
            children={({ state, handleChange, handleBlur }) => (
              <TextField
                isRequired
                validationBehavior="aria"
                name="name"
                className="flex flex-col gap-4"
              >
                <Label className="block">Name:</Label>
                <Input
                  className="h-10 w-80 rounded-lg bg-slate-800 px-4 placeholder:text-slate-400 focus-within:outline-none"
                  defaultValue={state.value}
                  onChange={(e) =>
                    handleChange(
                      e.target.value as unknown as UpdaterFn<never, never>,
                    )
                  }
                  onBlur={handleBlur}
                  placeholder="Name"
                />
                <FieldError></FieldError>
              </TextField>
            )}
          />

          <Field
            name="email"
            children={({ state, handleChange, handleBlur }) => (
              <TextField
                isRequired
                validationBehavior="aria"
                name="email"
                className="flex flex-col gap-4"
              >
                <Label className="block">Name:</Label>
                <Input
                  className="h-10 w-80 rounded-lg bg-slate-800 px-4 placeholder:text-slate-400 focus-within:outline-none"
                  defaultValue={state.value}
                  onChange={(e) =>
                    handleChange(
                      e.target.value as unknown as UpdaterFn<never, never>,
                    )
                  }
                  onBlur={handleBlur}
                  placeholder="Name"
                />
                <FieldError></FieldError>
              </TextField>
            )}
          />

          <Field
            name="message"
            children={({ state, handleChange, handleBlur }) => (
              <TextField
                isRequired
                validationBehavior="aria"
                name="email"
                className="flex flex-col gap-4"
              >
                <Label className="block">Message:</Label>
                <TextArea
                  className="h-10 w-80 rounded-lg bg-slate-800 px-4 placeholder:text-slate-400 focus-within:outline-none resize-none"
                  defaultValue={state.value}
                  onChange={(e) =>
                    handleChange(
                      e.target.value as unknown as UpdaterFn<never, never>,
                    )
                  }
                  onBlur={handleBlur}
                  placeholder="Name"
                />
                <FieldError></FieldError>
              </TextField>
            )}
          />

          <button type="submit">Submit</button>
        </form>
      </form.Provider>
    </div>
  );
}

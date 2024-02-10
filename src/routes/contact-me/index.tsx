import { FileRoute, Link, createFileRoute } from "@tanstack/react-router";
import { Field, UpdaterFn, useForm } from "@tanstack/react-form";
import {
  Button,
  FieldError,
  Input,
  Label,
  TextArea,
  TextField,
} from "react-aria-components";

export const Route = createFileRoute("/contact-me/")({
  component: ContactMe,
});

interface ContactMeForm {
  name: string;
  email: string;
}

export default function ContactMe() {
  const form = useForm<ContactMeForm>({
    onSubmit: async ({ value }) => {
      // Do something with form data
      console.log(value);
    },
  });

  return (
    <>
      <Link
        to="/"
        className="fixed left-[10%] top-[10%] text-xl font-medium transition-transform hover:translate-x-2 hover:underline hover:underline-offset-2"
      >
        &lt; Go back
      </Link>
      <div className="flex min-h-screen items-center justify-center gap-32">
        <div className="text-6xl font-bold underline underline-offset-8">
          Contact me
        </div>
        <form.Provider>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              e.stopPropagation();
              void form.handleSubmit();
            }}
            className="flex flex-col gap-4"
          >
            <Field
              name="name"
              children={({ state, handleChange, handleBlur }) => (
                <TextField
                  isRequired
                  validationBehavior="aria"
                  name="name"
                  className="flex flex-col gap-2"
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
                  className="flex flex-col gap-2"
                >
                  <Label className="block">Email:</Label>
                  <Input
                    className="h-10 w-80 rounded-lg bg-slate-800 px-4 placeholder:text-slate-400 focus-within:outline-none"
                    defaultValue={state.value}
                    onChange={(e) =>
                      handleChange(
                        e.target.value as unknown as UpdaterFn<never, never>,
                      )
                    }
                    onBlur={handleBlur}
                    placeholder="Email"
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
                  className="flex flex-col gap-2"
                >
                  <Label className="block">Message:</Label>
                  <TextArea
                    className="h-40 w-80 resize-none rounded-lg bg-slate-800 px-4 py-2 placeholder:text-slate-400 focus-within:outline-none"
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

            <Button
              type="submit"
              className="h-10 w-full rounded-lg border-2 border-slate-400 hover:bg-slate-400 hover:text-slate-950"
            >
              Submit
            </Button>
          </form>
        </form.Provider>
      </div>
    </>
  );
}

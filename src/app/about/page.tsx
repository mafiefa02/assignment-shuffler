import { buttonVariants } from "-/components/ui/button";
import Link from "next/link";

export const runtime = "edge";

const AboutPage = () => {
  return (
    <main className="container flex min-h-[calc(100dvh-73px)] flex-col items-center justify-center gap-12 text-balance p-12">
      <section className="max-w-[65ch] space-y-5">
        <div className="space-y-4">
          <h1 className="text-2xl font-semibold">
            so... what is{" "}
            <span className="text-4xl text-primary">shuffler;</span>? 🤔
          </h1>

          <p>
            do you ever have a need to{" "}
            <span className="border-b border-primary">
              distribute works evenly
            </span>{" "}
            among your team members? need not worry no more! shuffler; is an
            application to randomly and evenly distribute any assignments you
            have among your team!
          </p>
        </div>
      </section>

      <section className="max-w-[65ch] space-y-5">
        <h1 className="text-2xl font-semibold">
          umm... and{" "}
          <span className="text-4xl text-primary">how do you use it?</span>
        </h1>

        <p>
          easy! write out all the assignments and assignee you need on each of
          the input field
        </p>

        <h3 className="text-xl">
          then just click shuffle, and you&apos;re done!
        </h3>

        <p>
          you&apos;ll see the result below, and copy them to your clipboard
          using the copy button right on the left of the shuffle button.
        </p>
      </section>

      <section className="max-w-[65ch] space-y-2 rounded-lg bg-muted/40 p-6">
        <pre className="w-full text-wrap text-xl text-primary">
          example of result
        </pre>
        <pre className="text-wrap">
          Josh: cleaning up the desktop, covering up the evidence, on watch duty
        </pre>
        <pre className="text-wrap">
          Angela: contacting the victim beforehand, making sure no trace is left
        </pre>
      </section>

      <section className="max-w-[65ch]">
        if you have any feedback or want to contribute, please feel free to{" "}
        <Link
          href="https://afief.toscamedia.net/contact"
          target="_blank"
          className={buttonVariants({
            variant: "link",
            className: "px-0 underline",
          })}
        >
          contact me
        </Link>{" "}
        or visit this{" "}
        <Link
          href="https://github.com/mafiefa02/assignment-shuffler"
          target="_blank"
          className={buttonVariants({
            variant: "link",
            className: "px-0 underline",
          })}
        >
          app repo
        </Link>
        ! 😁
      </section>
    </main>
  );
};

export default AboutPage;

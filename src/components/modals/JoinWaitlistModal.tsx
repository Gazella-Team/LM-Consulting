import NiceModal, { useModal } from "@ebay/nice-modal-react";
import { Modal } from "../ui/Modal";
import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { getError } from "@/queries/http";

export default NiceModal.create(() => {
  const modal = useModal();
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (submitting) return;
    if (!email) {
      toast.error("Please enter your email");
    }
    setSubmitting(true);
    await axios
      .post(
        "https://api.toolbird.io/v1/waitlist/pk-e063d2649e134f90/submit",
        {
          email,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        toast.success("You have been added to the waitlist");
        modal.remove();
      })
      .catch((error) => {
        toast.error(getError(error));
        setSubmitting(false);
      });
  }

  return (
    <Modal modal={modal}>
      <div>
        <h1 className="text-lg font-semibold">Join the waitlist</h1>
        <p className="text-sm text-gray-700">
          Enter your email to join the waitlist
        </p>
        <form className="flex flex-col mt-4" onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 rounded p-2 bg-gray-50 active:border-main active:ring-main active:outline-main"
            placeholder="john@toolbird.io"
          />
          <button
            type="submit"
            disabled={submitting}
            className="bg-main active:bg-main/90 hover:bg-main/90 text-white rounded p-2 mt-2"
          >
            {submitting ? "Submitting..." : "Join waitlist "}
          </button>
        </form>
      </div>
    </Modal>
  );
});

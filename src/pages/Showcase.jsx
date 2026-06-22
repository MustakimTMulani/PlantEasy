import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";
import {
  Button,
  Input,
  Loader,
  Modal,
  Toast,
} from "../components/ui";

function Showcase() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);
  return (
    <div>
      <Navbar />

      <div className="max-w-5xl mx-auto p-10">
        <h1 className="text-4xl font-bold mb-8">
          UI Component Showcase
        </h1>

        <div className="flex gap-4 flex-wrap">
          <Button>Primary Button</Button>

          <Button variant="secondary">
            Secondary Button
          </Button>

          <Button variant="outline">
            Outline Button
          </Button>

          <Button disabled>
            Disabled Button
          </Button>
        </div>
      </div>

        <div className="mt-10 max-w-md">
        <Input
            label="Plant Name"
            placeholder="Enter plant name"
        />
        </div>

        <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">
            Loader Component
        </h2>

        <div className="flex gap-6 items-center">
            <Loader size="sm" />
            <Loader size="md" />
            <Loader size="lg" />
        </div>
        </div>

        <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">
            Modal Component
        </h2>

        <Button
            onClick={() => setIsModalOpen(true)}
        >
            Open Modal
        </Button>

        <Modal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            title="PlantEasy Modal"
        >
            <p>
            This is a reusable modal component.
            </p>
        </Modal>
        </div>

        <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">
            Toast Component
        </h2>

        <Button
            onClick={() => setShowToast(true)}
        >
            Show Toast
        </Button>

        <Toast
            message="PlantEasy notification!"
            isVisible={showToast}
            onClose={() => setShowToast(false)}
        />
        </div>


      <Footer />
    </div>
  );
}

export default Showcase;
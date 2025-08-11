import { useState, useRef } from "react";

// Simple Copy Icon SVG component
function CopyIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      fill="none"
      viewBox="0 0 16 16"
      stroke="currentColor"
    >
      <rect
        x="5"
        y="5"
        width="8"
        height="8"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <rect
        x="3"
        y="3"
        width="8"
        height="8"
        rx="2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.4"
      />
    </svg>
  );
}

function CommandBlock({ command }: { command: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <div className="relative my-4">
      {/* Header overlay */}
      <div className="absolute left-0 top-0 w-full flex items-center justify-between px-3 py-1 bg-black/40 rounded-t-md z-10">
        <span className="text-xs font-semibold text-gray-200">Command</span>
        <button
          onClick={() => {
            navigator.clipboard.writeText(command);
            setCopied(true);
            setTimeout(() => setCopied(false), 1200);
          }}
          className="bg-transparent border-primary text-white px-2 py-1 rounded text-xs ml-2 cursor-pointer"
        >
          {copied ? "Copied!" : "Copy"}
          <CopyIcon className="inline-block ml-1" />
        </button>
      </div>
      <pre
        className="bg-gray-900 text-green-400 rounded-md p-3 text-sm overflow-x-auto select-all max-w-full pt-10"
        style={{ minWidth: "0" }}
      >
        {command}
      </pre>
    </div>
  );
}

export const InstallModal = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  const [tab, setTab] = useState<"tab1" | "tab2" | "tab3">("tab1");
  const modalRef = useRef<HTMLDivElement>(null);

  // Prevent background scroll when modal is open
  if (typeof window !== "undefined") {
    document.body.style.overflow = open ? "hidden" : "";
  }

  // Close modal when clicking outside
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/60"
      onClick={handleOverlayClick}
      style={{ overscrollBehavior: "contain" }}
    >
      <div
        ref={modalRef}
        className="bg-gradient-to-br from-white via-gray-100 to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 rounded-xl shadow-2xl p-6 w-2xl max-w-2xl relative max-h-[80vh] mt-8 flex flex-col"
        style={{ zIndex: 1100 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          style={{ top: "18px" }}
          onClick={onClose}
          className="absolute right-4 text-gray-400 hover:text-primary text-2xl"
          aria-label="Close"
        >
          &times;
        </button>
        {/* Heading above the tabs */}
        <h2
          style={{ fontSize: "20px" }}
          className="md:text-xl font-bold text-primary mb-1 text-left"
        >
          Installation
          {/* (
          <span className=" font-light text-white">
            Choose any of the below options
          </span>
          ) */}
        </h2>
        <div className="flex justify-start text-left mb-4 border-b border-gray-300 dark:border-gray-700">
          <button
            className={`flex-1 py-2 font-semibold ${
              tab === "tab1"
                ? "text-primary border-b-2 border-primary"
                : "text-gray-500"
            }`}
            onClick={() => setTab("tab1")}
          >
            Docker
          </button>
          <button
            className={`flex-1 py-2 font-semibold ${
              tab === "tab2"
                ? "text-primary border-b-2 border-primary"
                : "text-gray-500"
            }`}
            onClick={() => setTab("tab2")}
          >
            AWS
          </button>
          <button
            className={`flex-1 py-2 font-semibold ${
              tab === "tab3"
                ? "text-primary border-b-2 border-primary"
                : "text-gray-500"
            }`}
            onClick={() => setTab("tab3")}
          >
            Helm
          </button>
        </div>
        <div
          className="min-h-[120px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent px-2"
          style={{
            maxHeight: "55vh",
            scrollbarColor: "#374151 #0000", // gray-700 thumb, transparent track
            scrollbarWidth: "thin",
            paddingRight: "6px",
          }}
        >
          {tab === "tab1" && (
            <div>
              <h4 className="text-xl font-bold mb-2 text-primary">
                Docker Installation (with Docker Compose)
              </h4>
              <ol className="list-decimal list-inside text-gray-700 dark:text-gray-200 mb-4 space-y-2">
                <li>
                  <span className="font-semibold">Clone the Repository</span>
                  <CommandBlock
                    command={`git clone https://github.com/Defendstack/defendstack-suite.git\ncd defendstack-suite/docker-compose`}
                  />
                </li>
                <li>
                  <span className="font-semibold">Run Docker Compose</span>
                  <CommandBlock command={`docker-compose up -d`} />
                </li>
                <li>
                  <span className="font-semibold">Access the Tools</span>
                  <div className="bg-gray-100 dark:bg-gray-800 rounded p-2 text-sm my-2">
                    DefendStack Platform:{" "}
                    <span className="text-primary">http://localhost:3000</span>
                  </div>
                </li>
                <li>
                  <span className="font-semibold">Stop the Services</span>
                  <CommandBlock command={`docker-compose down`} />
                </li>
              </ol>
              <div className="text-xs text-gray-500 mt-2">
                Make sure you have Docker and Docker Compose installed. If not,
                you can get them from{" "}
                <a
                  href="https://docs.docker.com/get-docker/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline"
                >
                  here
                </a>
                .
              </div>
            </div>
          )}
          {tab === "tab2" && (
            <div>
              <h4 className="text-xl font-bold mb-2 text-primary">
                AWS CloudFormation Installation
              </h4>
              <ol className="list-decimal list-inside text-gray-700 dark:text-gray-200 mb-4 space-y-2">
                <li>
                  <span className="font-semibold">
                    Access the CloudFormation Template
                  </span>
                  <div className="bg-gray-100 dark:bg-gray-800 rounded p-2 text-sm my-2 break-all">
                    <a
                      href="https://github.com/Defendstack/DefendStack-Suite/blob/main/aws-cloudformation/template-1-0.yaml"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary underline"
                    >
                      https://github.com/Defendstack/DefendStack-Suite/blob/main/aws-cloudformation/template-1-0.yaml
                    </a>
                  </div>
                </li>
                <li>
                  <span className="font-semibold">
                    Launch the CloudFormation Stack
                  </span>
                  <ul className="list-disc list-inside ml-5 text-sm mb-2">
                    <li>
                      Choose{" "}
                      <span className="font-semibold">"Template is ready"</span>{" "}
                      and select{" "}
                      <span className="font-semibold">"Amazon S3 URL"</span>.
                    </li>
                    <li>
                      Paste the URL above and click{" "}
                      <span className="font-semibold">Next</span>.
                    </li>
                    <li>Provide a Stack Name and any required parameters.</li>
                    <li>
                      Click <span className="font-semibold">Next</span>,
                      configure stack options if needed, and proceed.
                    </li>
                    <li>
                      Acknowledge any IAM permissions required and click{" "}
                      <span className="font-semibold">Create Stack</span>.
                    </li>
                  </ul>
                </li>
                <li>
                  <span className="font-semibold">Wait for Deployment</span>
                  <ul className="list-disc list-inside ml-5 text-sm mb-2">
                    <li>The deployment process will take a few minutes.</li>
                    <li>
                      Monitor the progress in the CloudFormation Stacks section.
                    </li>
                    <li>
                      Once complete, the status will change to{" "}
                      <span className="font-semibold">CREATE_COMPLETE</span>.
                    </li>
                  </ul>
                </li>
                <li>
                  <span className="font-semibold">Access the Tools</span>
                  <ul className="list-disc list-inside ml-5 text-sm mb-2">
                    <li>
                      After the stack is deployed, go to the{" "}
                      <span className="font-semibold">Outputs</span> tab.
                    </li>
                    <li>
                      Find the endpoint URLs for accessing the deployed
                      services.
                    </li>
                  </ul>
                </li>
              </ol>
            </div>
          )}
          {tab === "tab3" && (
            <div>
              <h4 className="text-xl font-bold mb-2 text-primary">
                Helm Installation (For GKE)
              </h4>
              <ol className="list-decimal list-inside text-gray-700 dark:text-gray-200 mb-4 space-y-2">
                <li>
                  <span className="font-semibold">
                    Inspect values.yaml and Update Configuration
                  </span>
                  <p className="text-sm mb-1">
                    Review and customize the default configuration in{" "}
                    <span className="font-mono">values.yaml</span> based on your
                    environment:
                  </p>
                  <CommandBlock command={`cat values.yaml`} />
                  <ul className="list-disc list-inside ml-5 text-sm mb-2">
                    <li>Image repositories and tags</li>
                    <li>Resource limits (CPU, memory)</li>
                    <li>Enabled/disabled components</li>
                  </ul>
                </li>
                <li>
                  <span className="font-semibold">
                    Installing the Nginx Ingress Controller (using L7 TCP
                    LoadBalancer)
                  </span>
                  <CommandBlock
                    command={`kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.10.1/deploy/static/provider/cloud/deploy.yaml`}
                  />
                </li>
                <li>
                  <span className="font-semibold">
                    Install the Chart Locally
                  </span>
                  <CommandBlock
                    command={`helm upgrade --install defendstack helm-chart/ --namespace defendstack --create-namespace --dependency-update`}
                  />
                  <ul className="list-disc list-inside ml-5 text-sm mb-2">
                    <li>
                      <span className="font-mono">defendstack</span>: release
                      name
                    </li>
                    <li>
                      <span className="font-mono">helm-chart/</span>: path to
                      the chart
                    </li>
                    <li>
                      <span className="font-mono">--namespace defendstack</span>
                      : Helm will install resources into this namespace (and
                      create it if it doesn't exist)
                    </li>
                  </ul>
                </li>
                <li>
                  <span className="font-semibold">
                    (Optional) Install with Custom Values
                  </span>
                  <p className="text-sm mb-1">
                    If you want to override any default config, use a custom{" "}
                    <span className="font-mono">my-values.yaml</span> file:
                  </p>
                  <CommandBlock
                    command={`helm upgrade --install defendstack helm-chart/ -f my-values.yaml --namespace defendstack --create-namespace --dependency-update`}
                  />
                </li>
                <li>
                  <span className="font-semibold">Verify Deployment</span>
                  <CommandBlock command={`kubectl get pods -n defendstack`} />
                  <CommandBlock command={`kubectl get svc -n defendstack`} />
                  <p className="text-sm mb-1">
                    You should see all components like postgres, frontend,
                    backend-auth, backend-main, etc., running.
                  </p>
                </li>
                <li>
                  <span className="font-semibold">Setting up Env</span>
                  <p className="text-sm mb-1">
                    Wait for ingress resource, it will automatically get the{" "}
                    <span className="font-mono">&lt;external-ip&gt;</span>
                  </p>
                  <CommandBlock
                    command={`kubectl get ingress -n defendstack`}
                  />
                  <p className="text-sm mb-1">
                    Copy the{" "}
                    <span className="font-mono">&lt;external-ip&gt;</span> and
                    run the below commands
                  </p>
                  <CommandBlock
                    command={`kubectl set env deployment/defendstack-thedefendstack-app-frontend VITE_API_BASE_URL="https://<external-ip>/api" -n defendstack`}
                  />
                  <CommandBlock
                    command={`kubectl rollout restart deployment defendstack-thedefendstack-app-frontend -n defendstack`}
                  />
                </li>
                <li>
                  <span className="font-semibold">Access the Web UI</span>
                  <p className="text-sm mb-1">
                    Use the same external IP from the above step:{" "}
                    <span className="text-primary">
                      https://&lt;external-ip&gt;
                    </span>
                  </p>
                </li>
              </ol>
            </div>
          )}
        </div>
        {/* Footer */}
        <div className="w-full text-center pt-2 text-xs text-gray-500 bg-transparent">
          For more details, please refer the{" "}
          <a
            href="https://github.com/Defendstack/DefendStack-Suite?tab=readme-ov-file#installation"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline"
          >
            docs
          </a>
          .
        </div>
      </div>
    </div>
  );
};

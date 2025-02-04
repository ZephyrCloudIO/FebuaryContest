import { Trophy, Clock, Users, Book } from "lucide-react";
import { Leaderboard } from "./components/Leaderboard";
import { Rules } from "./components/Rules";
import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";

function App() {
  // Example end date - 48 hours from now
  const endDate = new Date("2025-02-07T05:00:00.000Z"); // 00:00 EST = 05:00 UTC

  return (
    <div className="min-h-screen  text-white flex flex-col gap-12">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black z-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 relative z-10">
          <div className="text-center">
            <div className="w-64 mx-auto mb-8 rounded-xl  flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="175"
                height="31"
                viewBox="0 0 175 31"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M15.4817 24.4488C20.4323 24.4488 24.4455 20.4356 24.4455 15.4851C24.4455 13.5983 23.8626 11.8477 22.867 10.4036L28.6926 4.57793C29.1841 4.08642 28.904 3.23829 28.2207 3.11067C27.4857 2.97338 26.7538 2.8147 26.0262 2.63463C24.5554 2.27062 23.1018 1.81921 21.6737 1.28037L21.5397 1.22955C21.2814 1.13098 21.0239 1.02955 20.7673 0.925248C19.1183 0.326522 17.3387 0 15.4828 0C11.211 0 7.34329 1.73001 4.54201 4.52764C1.73594 7.33005 0 11.2037 0 15.4829C0 17.1562 0.265444 18.7675 0.756521 20.277C1.02153 21.0916 1.97694 21.3994 2.71881 20.9711C3.34644 20.6087 3.59886 19.8389 3.38949 19.1451C2.08815 14.8327 3.14151 9.96162 6.54956 6.55357C11.0917 2.01146 18.2325 1.65187 23.186 5.47481L20.5619 8.0989C19.118 7.10388 17.3679 6.5213 15.4817 6.5213C10.5312 6.5213 6.51798 10.5345 6.51798 15.4851C6.51798 17.3712 7.10055 19.1213 8.09558 20.5653L2.27104 26.3898C1.77953 26.8813 2.05965 27.7295 2.74294 27.8571C3.47798 27.9944 4.20981 28.153 4.93743 28.3331C6.40824 28.6971 7.86185 29.1485 9.29 29.6874L9.42393 29.7382C9.68227 29.8368 9.93976 29.9382 10.1964 30.0425C11.8454 30.6412 13.625 30.9677 15.4808 30.9677C19.7239 30.9677 23.5684 29.2609 26.365 26.4964L26.4309 26.4309C29.2315 23.6292 30.9637 19.7593 30.9637 15.4849C30.9637 13.8123 30.6985 12.2017 30.2078 10.6928C29.9427 9.87745 28.9864 9.5693 28.2438 9.99801C27.6156 10.3607 27.363 11.1312 27.5725 11.8256C28.8734 16.1378 27.8199 21.0084 24.4121 24.4161C19.87 28.9583 12.7292 29.3178 7.77565 25.4949L10.4002 22.8703C11.8444 23.8659 13.595 24.4488 15.4817 24.4488ZM21.4326 15.4847C21.4326 18.8601 18.6963 21.5963 15.3209 21.5963C14.2672 21.5963 13.2758 21.3297 12.4104 20.8601L20.6964 12.5742C21.1659 13.4395 21.4326 14.431 21.4326 15.4847ZM9.20927 15.4847C9.20927 12.1093 11.9455 9.37304 15.3209 9.37304C16.4585 9.37304 17.5235 9.68385 18.4357 10.2252L10.0614 18.5994C9.52008 17.6873 9.20927 16.6223 9.20927 15.4847ZM80.9055 23.4839H79.0055V8.48389H80.9055V13.9639L80.6455 15.5839H81.0455C81.4855 13.9639 82.5855 13.1839 84.6055 13.1839C87.1855 13.1839 88.3655 14.5039 88.3655 17.1839V23.4839H86.2655L86.6655 17.5839C86.7855 15.6039 85.8455 14.8639 84.0455 14.8639C81.9255 14.8639 80.9055 16.1439 80.9055 18.2439V23.4839ZM42.4973 11.1239V9.48389H52.6173V13.6239L42.4373 21.4239V21.8239H52.9773V23.4839H42.1373V19.3239L52.3173 11.5239V11.1239H42.4973ZM62.2867 19.4039H64.1667C63.8667 22.1439 62.3067 23.7839 59.4067 23.7839C56.0667 23.7839 54.2467 21.7439 54.2467 18.4839C54.2467 15.2239 56.0067 13.1839 59.2067 13.1839C62.2067 13.1839 63.7267 14.9839 63.7267 18.1639H56.1267C56.1267 20.5239 56.7267 22.1839 59.4067 22.1839C61.3067 22.1839 62.1067 21.2239 62.2867 19.4039ZM56.3067 16.8639H61.7667C61.7467 15.6239 60.9267 14.7639 59.2467 14.7639C57.5667 14.7639 56.6467 15.4639 56.3067 16.8639ZM66.0948 28.0839H67.9948V23.0039L67.7948 21.1839H68.1948C68.6948 22.8039 69.8148 23.7839 71.9948 23.7839C75.0548 23.7839 76.7348 21.7439 76.7348 18.4839C76.7348 15.2239 75.0548 13.1839 71.9948 13.1839C69.8948 13.1839 68.6948 14.1639 68.1948 15.7839H67.7948L67.9948 13.4839H66.0948V28.0839ZM71.6148 22.1439C69.3948 22.1439 68.0948 20.6439 68.0948 18.4639C68.0948 16.2839 69.2148 14.7839 71.6148 14.7839C73.7548 14.7839 74.8348 16.1039 74.8348 18.4639C74.8348 20.8239 73.7548 22.1439 71.6148 22.1439ZM91.6228 13.4839H89.7228L92.6428 23.4839H94.7228L94.0628 25.5639C93.9228 26.1039 93.8628 26.1439 93.3028 26.1239L89.9228 26.0839V27.9839L92.9028 27.7239C94.8228 27.5639 95.7228 26.3639 96.2028 24.6439L99.5028 13.4839H97.6028L94.8028 23.1839H94.4028L91.6228 13.4839ZM103.132 23.4839H101.232V13.4839H103.132L102.932 15.5839H103.332C103.752 13.9639 104.652 13.4839 106.372 13.4839H108.152V15.3439L105.972 15.1439C104.092 14.9839 103.132 16.1239 103.132 18.2439V23.4839ZM121.918 22.1439C118.918 22.1439 117.418 20.2839 117.418 16.4839C117.418 12.6839 118.838 10.8239 121.618 10.8239C124.018 10.8239 125.338 12.0439 125.618 14.8639H127.578C127.258 10.9839 125.238 9.18389 121.638 9.18389C117.578 9.18389 115.478 11.6239 115.478 16.4839C115.478 21.3439 117.658 23.7839 121.938 23.7839C125.718 23.7839 127.858 21.9839 128.178 18.0839H126.218C125.938 20.9239 124.498 22.1439 121.918 22.1439ZM129.467 8.48389H131.207C132.987 8.48389 133.847 9.34389 133.847 11.1239V21.8639H136.987V23.4839H128.867V21.8639H132.027V10.5239C132.027 9.96389 131.967 9.82389 131.427 9.92389L129.467 10.2839V8.48389ZM143.177 13.1839C139.977 13.1839 137.977 15.2239 137.977 18.4839C137.977 21.7439 139.977 23.7839 143.177 23.7839C146.397 23.7839 148.397 21.7439 148.397 18.4839C148.397 15.2239 146.397 13.1839 143.177 13.1839ZM143.177 22.1839C140.997 22.1839 139.857 20.8639 139.857 18.4839C139.857 16.1039 140.997 14.7839 143.177 14.7839C145.377 14.7839 146.517 16.1039 146.517 18.4839C146.517 20.8639 145.377 22.1839 143.177 22.1839ZM150.329 13.4839H152.429L152.029 19.3839C151.909 21.3239 152.849 22.0839 154.649 22.0839C156.729 22.0839 157.769 20.8039 157.789 18.8239V13.4839H159.689V21.2839C159.689 21.8439 159.749 21.9839 160.289 21.8839L161.429 21.6839V23.4839H160.389C158.969 23.4839 158.029 22.6039 158.029 21.3239L157.629 21.3439C157.189 22.9639 155.949 23.7839 154.089 23.7839C151.509 23.7839 150.329 22.4639 150.329 19.7839V13.4839ZM173.07 8.48389H171.17V13.9639L171.37 15.7839H170.97C170.49 14.1639 169.37 13.1839 167.17 13.1839C164.13 13.1839 162.43 15.2239 162.43 18.4839C162.43 21.7439 164.13 23.7839 167.17 23.7839C169.27 23.7839 170.49 22.8039 170.97 21.1839H171.37C171.37 22.5039 172.39 23.4839 173.77 23.4839H174.81V21.6839L173.67 21.8839C173.11 21.9839 173.07 21.8439 173.07 21.2839V8.48389ZM167.57 14.8239C169.77 14.8239 171.07 16.3239 171.07 18.4839C171.07 20.6439 169.97 22.1239 167.57 22.1239C165.41 22.1239 164.33 20.8239 164.33 18.4839C164.33 16.1439 165.41 14.8239 167.57 14.8239Z"
                  fill="url(#paint0_radial_128_1909)"
                />
                <defs>
                  <radialGradient
                    id="paint0_radial_128_1909"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(87.4049 15.4839) scale(109.579 64.8805)"
                  >
                    <stop stop-color="white" />
                    <stop offset="1" stop-color="#505050" />
                  </radialGradient>
                </defs>
              </svg>
            </div>
            <h1 className="text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Deploy Week 2025
            </h1>
            <p className="text-2xl text-gray-400 mb-12">
              5 Days of Innovation, Code, and Creation
            </p>
            {/* <CountdownTimer endDate={endDate} /> */}
            <div className="flex justify-center">
              <FlipClockCountdown to={endDate} />
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="py-12 bg-gray-800/30 backdrop-blur-md ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center justify-center space-x-4">
              <Users className="h-8 w-8 text-blue-500" />
              <div>
                <h3 className="text-2xl font-bold">Tons</h3>
                <p className="text-gray-400">Participants</p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-4">
              <Trophy className="h-8 w-8 text-yellow-500" />
              <div>
                <h3 className="text-2xl font-bold">Thousands</h3>
                <p className="text-gray-400">In Prizes</p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-4">
              <Clock className="h-8 w-8 text-green-500" />
              <div>
                <h3 className="text-2xl font-bold">3 Days</h3>
                <p className="text-gray-400">To Build</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Rules Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-gray-800/30 backdrop-blur-md">
        <div className="flex items-center justify-center space-x-3 mb-12">
          <Book className="h-8 w-8 text-white" />
          <h2 className="text-3xl font-bold text-center">Competition Rules</h2>
        </div>
        <div className="rounded-xl p-8 shadow-xl">
          <Rules />
        </div>
      </div>

      {/* Leaderboard Section */}
      <div className="max-w-7xl px-4 sm:px-6 lg:px-8 py-16 bg-gray-800/30 backdrop-blur-md">
        <h2 className="text-3xl font-bold text-center mb-12">
          Live Leaderboard
        </h2>
        <Leaderboard />
      </div>
    </div>
  );
}

export default App;

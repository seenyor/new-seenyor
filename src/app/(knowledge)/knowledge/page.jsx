import { Button, Input } from "@/components";
import { Search } from "lucide-react";
import {
  Download,
  HelpCircle,
  Monitor,
  Phone,
  Play,
  User,
  Users,
  Wallet,
  Wrench,
} from "lucide-react";
import Link from "next/link";

const Knowledge = () => {
  // w-full max-w-7xl mx-auto
  return (
    <div>
      <div className="bg-[#7F87FC] py-12">
        <div className="flex flex-col items-center gap-4 w-full max-w-2xl mx-auto px-8">
          <h1 className="text-2xl font-semibold text-white">
            How can we Help?
          </h1>
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-3 flex items-center">
              <Search className="h-6 w-6 text-gray-500" />
            </div>
            <Input
              type="search"
              placeholder="Search the knowledge base..."
              className="w-full rounded-full bg-white pl-10 pr-4 py-0 text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-600"
            />
          </div>
        </div>
      </div>
      <div className=" flex  flex-col gap-10 bg-white mb-8">
        <div className="mx-auto max-w-7xl bg-[#F5F5FB] w-full p-6">
          <h2 className="my-8 pb-2 border-b border-slate-400 text-2xl font-semibold">
            Help Topics
          </h2>

          <div className="grid grid-cols-4 sm:block md:grid-cols-2 gap-4  ">
            {/* Row 1 */}
            <Link href="#" className="block">
              <div className="flex flex-row items-center bg-white rounded-xl gap-4 p-4 min-h-[100px]">
                <div className="rounded-lg bg-blue-100 p-2">
                  <HelpCircle className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold">First Time Use</h3>
                  <p className="text-sm text-gray-500">
                    Welcome to Senryor Application
                  </p>
                </div>
              </div>
            </Link>

            <Link href="#" className="block">
              <div className="flex flex-row items-center bg-white rounded-xl gap-4 p-4 min-h-[100px]">
                <div className="rounded-lg bg-blue-100 p-2">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold">Elderly Management</h3>
                  <p className="text-sm text-gray-500">
                    Creating Personalized Care and Monitoring
                  </p>
                </div>
              </div>
            </Link>

            <Link href="#" className="block">
              <div className="flex flex-row items-center bg-white rounded-xl gap-4 p-4 min-h-[100px]">
                <div className="rounded-lg bg-blue-100 p-2">
                  <Monitor className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold">Device Management</h3>
                  <p className="text-sm text-gray-500">
                    Monitor Device Performance and Updates
                  </p>
                </div>
              </div>
            </Link>

            <Link href="#" className="block">
              <div className="flex flex-row items-center bg-white rounded-xl gap-4 p-4 min-h-[100px]">
                <div className="rounded-lg bg-blue-100 p-2">
                  <Wrench className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold">Troubleshoot</h3>
                  <p className="text-sm text-gray-500">
                    Solutions for a Smooth Experience
                  </p>
                </div>
              </div>
            </Link>

            {/* Row 2 */}
            <Link href="#" className="block">
              <div className="flex flex-row items-center bg-white rounded-xl gap-4 p-4 min-h-[100px]">
                <div className="rounded-lg bg-blue-100 p-2">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold">Using the App</h3>
                  <p className="text-sm text-gray-500">
                    A Guide to Using Key App Features
                  </p>
                </div>
              </div>
            </Link>

            <Link href="#" className="block">
              <div className="flex flex-row items-center bg-white rounded-xl gap-4 p-4 min-h-[100px]">
                <div className="rounded-lg bg-blue-100 p-2">
                  <Monitor className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold">Using the Platform</h3>
                  <p className="text-sm text-gray-500">
                    A Guide to Using Key Platform Features
                  </p>
                </div>
              </div>
            </Link>

            <Link href="#" className="block">
              <div className="flex flex-row items-center bg-white rounded-xl gap-4 p-4 min-h-[100px]">
                <div className="rounded-lg bg-blue-100 p-2">
                  <Wallet className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold">Billing & Payments</h3>
                  <p className="text-sm text-gray-500">
                    Billing & Payments Troubleshoot
                  </p>
                </div>
              </div>
            </Link>

            <Link href="#" className="block">
              <div className="flex flex-row items-center bg-white rounded-xl gap-4 p-4 min-h-[100px]">
                <div className="rounded-lg bg-blue-100 p-2">
                  <User className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold">My Account</h3>
                  <p className="text-sm text-gray-500">
                    Managing Senryor Account
                  </p>
                </div>
              </div>
            </Link>

            {/* Row 3 */}
            <Link href="#" className="block">
              <div className="flex flex-row items-center bg-white rounded-xl gap-4 p-4 min-h-[100px]">
                <div className="rounded-lg bg-blue-100 p-2">
                  <Play className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold">Videos</h3>
                  <p className="text-sm text-gray-500">
                    Interactive Video Materials
                  </p>
                </div>
              </div>
            </Link>

            <Link href="#" className="block">
              <div className="flex flex-row items-center bg-white rounded-xl gap-4 p-4 min-h-[100px]">
                <div className="rounded-lg bg-blue-100 p-2">
                  <Download className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold">Download Zone</h3>
                  <p className="text-sm text-gray-500">
                    Welcome to Senryor Download Zone
                  </p>
                </div>
              </div>
            </Link>

            <div className="md:col-span-1 col-span-2">
              <div className="flex bg-white rounded-xl min-h-[100px] flex-row items-center gap-4 p-4">
                <div className="rounded-lg bg-blue-100 p-2">
                  <HelpCircle className="h-6 w-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold">Need Support?</h3>
                  <p className="text-sm text-gray-500">
                    Can not find the answer you are looking for? Dont worry we
                    are here to help!
                  </p>
                </div>
                <Button className="bg-[#80CAA7] hover:bg-emerald-300 text-white font-semibold py-2 px-4 rounded">
                  Contact Support
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Knowledge;

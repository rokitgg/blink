import { Button } from "@acme/ui/button";
import { FolderOpen, Layout, Palette, Search, TrendingUp } from "lucide-react";
import {
  Credenza,
  CredenzaTrigger,
  CredenzaContent,
  CredenzaDescription,
  CredenzaHeader,
  CredenzaTitle,
  CredenzaBody,
  CredenzaClose,
  CredenzaFooter,
} from "@acme/ui/credenza";
import { Input } from "@acme/ui/input";

export function HeaderSearch() {
  return (
    <div className="overflow-hidden px-4 py-2">
      <Credenza>
        <CredenzaTrigger asChild>
          <div className="group relative">
            <button
              type="button"
              className="relative min-w-0 flex h-10 w-full items-center gap-3 px-4 lg:h-12 lg:gap-3 lg:px-5 justify-start cursor-pointer rounded-3xl bg-muted text-gray-400 group-hover:bg-accent focus-visible:ring-2 focus-visible:ring-blue-500 transition-colors"
            >
              <Search className="h-4 w-4 shrink-0 text-white lg:h-5 lg:w-5" />
              <span className="truncate text-sm">Search markets...</span>
            </button>
          </div>
        </CredenzaTrigger>
        <CredenzaContent className="px-6 gap-0 flex flex-col h-full overflow-hidden bg-[#262626e0] rounded-3xl max-h-[720px] w-[816px]">
          <CredenzaHeader className="py-6">
            <Input
              placeholder="Search markets... "
              className="bg-transparent w-full border-none outline-none cursor-text grow ring-0 border-0 text-xl placeholder:text-xl"
            />
          </CredenzaHeader>
          <CredenzaBody>
            <div className="flex h-full">
              {/* Left Sidebar */}
              <div className="w-64 border-muted-foreground">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-3 text-white font-medium bg-accent cursor-pointer py-2 px-4 rounded-full">
                    <TrendingUp className="w-5 h-5" />
                    <span>Trending</span>
                  </div>
                  <div className="flex cursor-pointer items-center gap-3 text-white font-medium hover:bg-accent py-2 px-4 rounded-full">
                    <FolderOpen className="w-5 h-5" />
                    <span>Categories</span>
                  </div>
                  <div className="flex items-center cursor-pointer  gap-3 text-white font-medium hover:bg-accent py-2 px-4 rounded-full">
                    <Layout />
                    <span>Sections</span>
                  </div>
                  <div className="flex items-center gap-3 cursor-pointer text-white font-medium hover:bg-accent py-2 px-4 rounded-full">
                    <Palette className="w-5 h-5" />
                    <span>Styles</span>
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="flex-1 pl-6">
                {/* App Icons */}
                <div className="mb-8">
                  <div className="flex gap-4 mb-6">
                    <button
                      type="button"
                      className="w-16 h-16 bg-accent hover:bg-white/10 rounded-xl flex items-center justify-center"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100%"
                        height="100%"
                        version="1.1"
                        shape-rendering="geometricPrecision"
                        text-rendering="geometricPrecision"
                        image-rendering="optimizeQuality"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        viewBox="0 0 4091.27 4091.73"
                        className="w-12 h-12"
                      >
                        <title>Bitcoin</title>
                        <g id="Layer_x0020_1">
                          <metadata id="CorelCorpID_0Corel-Layer" />
                          <g id="_1421344023328">
                            <path
                              fill="#F7931A"
                              fill-rule="nonzero"
                              d="M4030.06 2540.77c-273.24,1096.01 -1383.32,1763.02 -2479.46,1489.71 -1095.68,-273.24 -1762.69,-1383.39 -1489.33,-2479.31 273.12,-1096.13 1383.2,-1763.19 2479,-1489.95 1096.06,273.24 1763.03,1383.51 1489.76,2479.57l0.02 -0.02z"
                            />
                            <path
                              fill="white"
                              fill-rule="nonzero"
                              d="M2947.77 1754.38c40.72,-272.26 -166.56,-418.61 -450,-516.24l91.95 -368.8 -224.5 -55.94 -89.51 359.09c-59.02,-14.72 -119.63,-28.59 -179.87,-42.34l90.16 -361.46 -224.36 -55.94 -92 368.68c-48.84,-11.12 -96.81,-22.11 -143.35,-33.69l0.26 -1.16 -309.59 -77.31 -59.72 239.78c0,0 166.56,38.18 163.05,40.53 90.91,22.69 107.35,82.87 104.62,130.57l-104.74 420.15c6.26,1.59 14.38,3.89 23.34,7.49 -7.49,-1.86 -15.46,-3.89 -23.73,-5.87l-146.81 588.57c-11.11,27.62 -39.31,69.07 -102.87,53.33 2.25,3.26 -163.17,-40.72 -163.17,-40.72l-111.46 256.98 292.15 72.83c54.35,13.63 107.61,27.89 160.06,41.3l-92.9 373.03 224.24 55.94 92 -369.07c61.26,16.63 120.71,31.97 178.91,46.43l-91.69 367.33 224.51 55.94 92.89 -372.33c382.82,72.45 670.67,43.24 791.83,-303.02 97.63,-278.78 -4.86,-439.58 -206.26,-544.44 146.69,-33.83 257.18,-130.31 286.64,-329.61l-0.07 -0.05zm-512.93 719.26c-69.38,278.78 -538.76,128.08 -690.94,90.29l123.28 -494.2c152.17,37.99 640.17,113.17 567.67,403.91zm69.43 -723.3c-63.29,253.58 -453.96,124.75 -580.69,93.16l111.77 -448.21c126.73,31.59 534.85,90.55 468.94,355.05l-0.02 0z"
                            />
                          </g>
                        </g>
                      </svg>
                    </button>
                    <button
                      type="button"
                      className="w-16 h-16 bg-accent hover:bg-white/10 rounded-xl flex items-center justify-center"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100%"
                        height="100%"
                        version="1.1"
                        shape-rendering="geometricPrecision"
                        text-rendering="geometricPrecision"
                        image-rendering="optimizeQuality"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        viewBox="0 0 784.37 1277.39"
                        className="w-12 h-12"
                      >
                        <title>Ethereum</title>
                        <g id="Layer_x0020_1">
                          <metadata id="CorelCorpID_0Corel-Layer" />
                          <g id="_1421394342400">
                            <g>
                              <polygon
                                fill="#343434"
                                fill-rule="nonzero"
                                points="392.07,0 383.5,29.11 383.5,873.74 392.07,882.29 784.13,650.54 "
                              />
                              <polygon
                                fill="#8C8C8C"
                                fill-rule="nonzero"
                                points="392.07,0 -0,650.54 392.07,882.29 392.07,472.33 "
                              />
                              <polygon
                                fill="#3C3C3B"
                                fill-rule="nonzero"
                                points="392.07,956.52 387.24,962.41 387.24,1263.28 392.07,1277.38 784.37,724.89 "
                              />
                              <polygon
                                fill="#8C8C8C"
                                fill-rule="nonzero"
                                points="392.07,1277.38 392.07,956.52 -0,724.89 "
                              />
                              <polygon
                                fill="#141414"
                                fill-rule="nonzero"
                                points="392.07,882.29 784.13,650.54 392.07,472.33 "
                              />
                              <polygon
                                fill="#393939"
                                fill-rule="nonzero"
                                points="0,650.54 392.07,882.29 392.07,472.33 "
                              />
                            </g>
                          </g>
                        </g>
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Categories */}
                <div className="mb-8">
                  <h3 className="text-gray-400 text-sm mb-4">Categories</h3>
                  <div className="grid grid-cols-4 gap-4">
                    <div className="space-y-2">
                      <h4 className="text-white font-medium">Business</h4>
                      <div className="w-full h-20 bg-gray-800 rounded-lg" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-white font-medium">Technology</h4>
                      <div className="w-full h-20 bg-gray-800 rounded-lg" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-white font-medium">Shopping</h4>
                      <div className="w-full h-20 bg-gray-800 rounded-lg" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-white font-medium">Portfolio</h4>
                      <div className="w-full h-20 bg-gray-800 rounded-lg" />
                    </div>
                  </div>
                </div>

                {/* Sections */}
                <div className="mb-8">
                  <h3 className="text-gray-400 text-sm mb-4">Sections</h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Hero",
                      "Pricing",
                      "Features",
                      "404",
                      "Social Proof",
                      "Footer",
                      "About",
                      "Showcase",
                      "Navigation",
                    ].map((section) => (
                      <span
                        key={section}
                        className="px-4 py-2 bg-gray-700 text-white rounded-full text-sm hover:bg-gray-600 transition-colors cursor-pointer"
                      >
                        {section}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Styles */}
                <div>
                  <h3 className="text-gray-400 text-sm mb-4">Styles</h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Colorful",
                      "Dark",
                      "Minimal",
                      "Illustration",
                      "Motion",
                      "Photography",
                      "Scroll Effects",
                    ].map((style) => (
                      <span
                        key={style}
                        className="px-4 py-2 bg-gray-700 text-white rounded-full text-sm hover:bg-gray-600 transition-colors cursor-pointer"
                      >
                        {style}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </CredenzaBody>
        </CredenzaContent>
      </Credenza>
    </div>
  );
}

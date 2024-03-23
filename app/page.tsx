// imports
import Dropzone from "@/components/dropzone";

export default function Home() {
  return (
    <div className="space-y-16 pb-8">
      {/* Title + Desc */}
      <div className="space-y-6">
        <h1 className="text-3xl md:text-5xl font-medium text-center">
          Free Unlimited File Converter
        </h1>
        <p className="text-gray-400 text-md md:text-lg text-center md:px-24 xl:px-44 2xl:px-52">
          We offer a user-friendly platform that allows you to convert files
          between various popular formats, including JPG, PNG, GIF, BMP, WEBP,
          TIF, MP3, and WAV, all completely free! No software downloads or
          complicated steps are required with Pic-Swap. Simply upload your file,
          choose your desired output format, and let us handle the rest. Our
          secure conversion process ensures your files remain protected
          throughout the process.
        </p>
      </div>

      {/* Upload Box */}
      <Dropzone />
    </div>
  );
}

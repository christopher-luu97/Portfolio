import Image from "next/image";

function ServiceCard({ imgSrc, title, description, icon }) {
  return (
    <div
      className="shadow-[#75809C] dark:shadow-[#E3E7EA]
          relative preserve-3d hover:my-rotate-y-180 
          transform transition-all duration-1000
          flex-1 justify-center items-center text-center shadow-lg p-5 rounded-3xl my-10
          hover:shadow-[#75809C] bg-[#F2EEED]
          dark:bg-[#37668a]"
    >
      <div className="backface-hidden h-48 bg-white rounded-3xl">
        <Image
          className="h-full w-full rounded-3xl object-scale-down shadow-md shadow-[#75809C]"
          src={imgSrc}
          alt="/"
        />
      </div>
      <div className="flex my-rotate-y-180 backface-hidden absolute inset-0 h-full w-full rounded-3xl px-8 py-8 text-center">
        <div className="m-auto rounded-3xl ring-2 ring-[#75809C] shadow-md shadow-[#75809C] dark:ring-white dark:shadow-[#E3E7EA]">
          <div className="px-5">
            {icon}
            <h3 className="pt-2 py-1 font-bold dark:text-white">{title}</h3>
            <p className="pt-1 py-2 dark:text-white">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;

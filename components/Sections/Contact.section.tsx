import {
  BsSpotify,
  MdCoffee,
  FaDev,
  AiOutlineTwitter,
  BsStackOverflow,
  BsSnapchat,
  BsGoogle,
} from "../Misc/Icons.collection";

import { Icon } from "../Misc/Icon.component";

const Contact = () => {
  return (
    <div className="font-sen px-3" id="contact">
      <p className="text-3xl font-bold text-white">Get in touch</p>

      <div className="my-8 flex flex-row justify-center gap-x-4">
        <Icon
          icon={<MdCoffee />}
          url="https://www.buymeacoffee.com/mrdanishsaleem"
        />

        <Icon
          icon={<AiOutlineTwitter />}
          url="https://twitter.com/MrDanishSaleem"
        />

        <Icon icon={<FaDev />} url="https://dev.to/mrdanishsaleem" />

        <Icon
          icon={<BsStackOverflow />}
          url="https://stackoverflow.com/users/11249940/mrdanishsaleem"
        />

        <Icon icon={<BsGoogle />} url="https://g.dev/mrdanishsaleem" />

        <Icon
          icon={<BsSnapchat />}
          url="https://www.snapchat.com/add/mrdanishsaleem1"
        />
      </div>
    </div>
  );
};

export default Contact;

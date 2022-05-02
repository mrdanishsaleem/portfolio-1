import {
  BsSpotify,
  MdEmail,
  AiOutlineGithub,
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
          icon={<AiOutlineGithub />}
          url="https://github.com/mrdanishsaleem"
        />

        <Icon
          icon={<AiOutlineTwitter />}
          url="https://twitter.com/MrDanishSaleem"
        />

        <Icon icon={<MdEmail />} url="mailto:danish_s@outlook.com" />

        <Icon
          icon={<BsSpotify />}
          url="https://open.spotify.com/user/qgu3xe8fo0k432q4nu3tbfzj5"
        />

        <Icon
          icon={<BsStackOverflow />}
          url="https://stackoverflow.com/users/11249940/mrdanishsaleem"
        />

        {/* <Icon icon={<BsGoogle />} url="https://g.dev/mrdanishsaleem" /> */}

        <Icon
          icon={<BsSnapchat />}
          url="https://www.snapchat.com/add/mrdanishsaleem1"
        />
      </div>
    </div>
  );
};

export default Contact;

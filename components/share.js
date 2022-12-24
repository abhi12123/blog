import {
  FacebookShareButton,
  FacebookIcon,
  TelegramShareButton,
  TelegramIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "next-share";

export default function Share({ url, title }) {
  return (
    <div className="share-buttons">
      <FacebookShareButton url={url} quote={title}>
        <FacebookIcon size={32} />
      </FacebookShareButton>
      <TelegramShareButton url={url} title={title}>
        <TelegramIcon size={32} />
      </TelegramShareButton>
      <TwitterShareButton url={url} title={title}>
        <TwitterIcon size={32} />
      </TwitterShareButton>
      <WhatsappShareButton url={url} titl={title} separator=":: ">
        <WhatsappIcon size={32} />
      </WhatsappShareButton>
      <LinkedinShareButton url={url}>
        <LinkedinIcon size={32} />
      </LinkedinShareButton>
    </div>
  );
}

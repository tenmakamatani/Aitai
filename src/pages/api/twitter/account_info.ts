import { NextApiRequest, NextApiResponse } from "next";
import Twitter from "twitter";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  // twitterライブラリを初期化
  const twitter = new Twitter({
    consumer_key: process.env.NEXT_PUBLIC_TWITTER_CONSUMER_KEY!,
    consumer_secret: process.env.NEXT_PUBLIC_TWITTER_CONSUMER_SECRET!,
    access_token_key: req.query['accessToken'] as string,
    access_token_secret: req.query['secret'] as string,
  });

  // ユーザの情報を取得
  const credential = await twitter.get('account/verify_credentials', {});

  // return
  res.setHeader("content-type", "application/json");
  res.status(200);
  res.end(JSON.stringify({ 
    name: credential['name'],
    imageUrl: credential['profile_image_url'],
    profileUrl: `https://twitter.com/${credential['screen_name']}`,
    description: credential['description']
  }));
}

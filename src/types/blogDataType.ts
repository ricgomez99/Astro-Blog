interface blogData {
  layout: string;
  title: string;
  pubDate: string | number;
  description: string;
  author: string;
  image: Image;
  tags: string[];
}

type Image = {
  url: string;
  alt: string;
};

export type blogDataType = Partial<blogData>;

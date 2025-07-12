type SanityWorkExperience = {
  _id: string
  _type: 'devExperience'
  _createdAt: string
  _updatedAt: string
  _rev: string
  position?: string
  startDate?: string
  endDate?: string
  description?: string
}

type SanityProject = {
  _id: string
  _type: 'project'
  _createdAt: string
  _updatedAt: string
  _rev: string
  Name: string
  Company?: string
  Date: string
  slug: string
  stack: Array<string>
  description?: string
  image?: {
    asset: {
      _ref: string
      _type: 'reference'
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
    }
    media?: unknown
    hotspot?: SanityImageHotspot
    crop?: SanityImageCrop
    _type: 'image'
  }
  content?: Array<
  | RawTextContent
  | RawImageContent
  >
}

interface RawTextContent {
    children: Array<{
      marks?: Array<string>
      text: string
      _type: 'span'
      _key: string
    }>
    style: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'blockquote'
    listItem?: 'bullet' | 'number'
    markDefs?: Array<{
      href?: string
      _type: 'link'
      _key: string
    }>
    level?: number
    _type: 'block'
    _key: string
  }


interface RawImageContent {
    asset: {
      _ref: string
      _type: 'reference'
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: 'image';
    _key: string;
}

interface ProcessedProject {
    name: string;
    company: string;
    date: string;
    stack: string[];
    projectImageUrl: string;
    slug: string;
    description: string;
    content: Array<ProcessedTextContent | ProcessedImageContent>;
}

interface ProcessedTextContent { //interface for processed text content
      type: 'text';
      textToRender: string;
      style: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'blockquote';
}

interface ProcessedImageContent {
  type: 'image';
  url: string;
  altText?: string;
}
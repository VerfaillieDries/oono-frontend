import * as prismicT from '@prismicio/types';

// Build a type for each Custom Type
export type testType = prismicT.PrismicDocument<{
  titel: prismicT.TitleField;
  foto: prismicT.ImageField;
}>;

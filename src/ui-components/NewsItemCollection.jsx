/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { News } from "../models";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import NewsItem from "./NewsItem";
import { Collection } from "@aws-amplify/ui-react";
export default function NewsItemCollection(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: News,
  }).items;
  const items = itemsProp !== undefined ? itemsProp : itemsDataStore;
  return (
    <Collection
      type="list"
      direction="column"
      justifyContent="left"
      items={items || []}
      {...rest}
      {...getOverrideProps(overrides, "NewsItemCollection")}
    >
      {(item, index) => (
        <NewsItem
          news={item}
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></NewsItem>
      )}
    </Collection>
  );
}

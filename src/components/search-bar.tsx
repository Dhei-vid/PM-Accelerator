"use client";
import { FC, ChangeEventHandler, KeyboardEventHandler } from "react";
import { Input } from "./ui/input";

interface ISearchBar {
  placeholder: string;
  value: string;
  type: string;
  onChangeHandler: ChangeEventHandler<HTMLInputElement>;
}

const SearchBar: FC<ISearchBar> = ({
  placeholder,
  onChangeHandler,
  value,
  type,
}) => {
  return (
    <main className={"w-full"}>
      <div className={"flex flex-row items-stretch justify-center"}>
        <Input
          type={type}
          placeholder={placeholder}
          onChange={onChangeHandler}
          value={value}
        />
      </div>
    </main>
  );
};

export default SearchBar;

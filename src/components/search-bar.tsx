"use client";
import { FC, ChangeEventHandler, KeyboardEventHandler } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Search } from "lucide-react";

interface ISearchBar {
  placeholder: string;
  location: string;
  handleSubmit: () => void;
  onChangeHandler: ChangeEventHandler<HTMLInputElement>;
  onKeyDown: KeyboardEventHandler<HTMLInputElement>;
}

const SearchBar: FC<ISearchBar> = ({
  placeholder,
  onChangeHandler,
  handleSubmit,
  location,
  onKeyDown,
}) => {
  return (
    <main className={"w-full"}>
      <div className={"flex flex-row items-stretch justify-center"}>
        <Input
          type={"text"}
          placeholder={placeholder}
          onChange={onChangeHandler}
          value={location}
          onKeyDown={onKeyDown}
        />
        <Button onClick={handleSubmit}>
          <Search className={"text-[#1B4965]"} size={30} />
        </Button>
      </div>
    </main>
  );
};

export default SearchBar;

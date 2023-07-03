// worktables-frontend/src/types/SearchBar.ts

export interface SearchBarProps {
    onSearch: (query: string) => void;
    isFetching: boolean;
}

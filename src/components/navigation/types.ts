export type Position = {
    left: number;
    width: number;
    opacity: number;
  };
  
  export type TabProps = {
    children: React.ReactNode;
    setPosition: React.Dispatch<React.SetStateAction<Position>>;
    href: string;
  };
  
  export type CursorProps = {
    position: Position;
  };
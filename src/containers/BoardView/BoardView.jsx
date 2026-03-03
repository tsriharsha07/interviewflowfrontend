import React from "react";
import { useParams } from "react-router-dom";

const BoardView = () => {
  const { id } = useParams();

  return (
    <div className="flex flex-col h-full">
      <header className="px-6 py-6 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Board ID: {id}</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Project board overview
          </p>
        </div>
        <div className="flex items-center gap-4">
          <button className="bg-primary hover:bg-primary-hover text-white px-4 py-2 rounded font-medium shadow-sm transition-colors text-sm flex items-center gap-2">
            <span className="material-icons-round text-sm">share</span>
            Share Board
          </button>
        </div>
      </header>

      <div className="flex-1 overflow-x-auto overflow-y-hidden p-6">
        <div className="flex h-full gap-6 min-w-[800px]">
          {/* Column: To Do */}
          <div className="flex flex-col w-80 bg-surface-light dark:bg-surface-dark rounded-lg border border-border-light dark:border-border-dark h-full">
            <div className="p-3 flex items-center justify-between border-b border-border-light dark:border-border-dark bg-white/50 dark:bg-black/20 rounded-t-lg">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-gray-400"></span>
                <h3 className="font-semibold text-sm uppercase tracking-wide">
                  To Do
                </h3>
                <span className="bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-[10px] px-1.5 rounded-full font-mono">
                  3
                </span>
              </div>
              <button className="text-gray-400 hover:text-text-light dark:hover:text-text-dark">
                <span className="material-icons-round text-lg">more_horiz</span>
              </button>
            </div>
            <div className="p-3 flex-1 overflow-y-auto column-scroll space-y-3">
              {/* sample task card */}
              <div className="bg-background-light dark:bg-background-dark p-3 rounded border border-border-light dark:border-border-dark shadow-card hover:shadow-md cursor-pointer transition-shadow group">
                <div className="flex justify-between items-start mb-2">
                  <span className="bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 text-[10px] font-bold px-2 py-0.5 rounded uppercase">
                    High
                  </span>
                  <button className="opacity-0 group-hover:opacity-100 text-gray-400 hover:text-primary transition-opacity">
                    <span className="material-icons-round text-base">edit</span>
                  </button>
                </div>
                <h4 className="text-sm font-medium mb-3 leading-snug">
                  Implement Redis adapter for cluster mode
                </h4>
                <div className="flex items-center justify-between">
                  <div className="flex -space-x-1.5">
                    <img
                      alt="Assignee"
                      className="w-6 h-6 rounded-full border border-background-light dark:border-background-dark"
                      src="https://via.placeholder.com/24"
                    />
                  </div>
                  <div className="flex items-center gap-1 text-gray-400 text-xs">
                    <span className="material-icons-round text-[14px]">
                      chat_bubble_outline
                    </span>
                    <span>2</span>
                  </div>
                </div>
              </div>
            </div>
            <button className="m-3 p-2 rounded border border-dashed border-gray-300 dark:border-gray-600 text-gray-500 hover:text-primary hover:border-primary hover:bg-white dark:hover:bg-black/20 transition-all flex items-center justify-center gap-2 text-sm font-medium">
              <span className="material-icons-round text-base">add</span>
              New Task
            </button>
          </div>
          {/* TODO: other columns can be added similarly */}
        </div>
      </div>
    </div>
  );
};

export default BoardView;

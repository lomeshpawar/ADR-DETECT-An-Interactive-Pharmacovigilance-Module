import React from 'react';

export const Card = ({ children, className = '', title, subtitle, icon: Icon, headerAction }) => {
  return (
    <div className={`bg-white rounded-2xl border border-slate-200/90 shadow-sm p-5 md:p-6 ${className}`}>
      {(title || Icon || headerAction) && (
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
          <div className="flex items-center gap-3">
            {Icon && (
              <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                <Icon className="w-5 h-5" />
              </div>
            )}
            <div>
              {title && <h3 className="font-bold text-slate-900 text-base md:text-lg">{title}</h3>}
              {subtitle && <p className="text-xs text-slate-500 mt-0.5">{subtitle}</p>}
            </div>
          </div>
          {headerAction && <div>{headerAction}</div>}
        </div>
      )}
      {children}
    </div>
  );
};

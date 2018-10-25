"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Utilities = require("../Utilities");

const spinalCore = require("spinal-core-connectorjs");
const globalType = typeof window === "undefined" ? global : window;


/**
 *
 *
 * @class TimeSeriesData
 * @extends {Model}
 */
class TimeSeriesData extends globalType.Model {
  constructor(argDate, argValue) {
    super();
    if (FileSystem._sig_server) {
      this.add_attr({
        id: _Utilities.Utilities.guid("TimeSeries"),
        date: argDate,
        value: argValue
      });
    }
  }
}

exports.default = TimeSeriesData;

spinalCore.register_models([TimeSeriesData]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9UaW1lU2VyaWVzRGF0YS5qcyJdLCJuYW1lcyI6WyJzcGluYWxDb3JlIiwicmVxdWlyZSIsImdsb2JhbFR5cGUiLCJ3aW5kb3ciLCJnbG9iYWwiLCJUaW1lU2VyaWVzRGF0YSIsIk1vZGVsIiwiY29uc3RydWN0b3IiLCJhcmdEYXRlIiwiYXJnVmFsdWUiLCJGaWxlU3lzdGVtIiwiX3NpZ19zZXJ2ZXIiLCJhZGRfYXR0ciIsImlkIiwiVXRpbGl0aWVzIiwiZ3VpZCIsImRhdGUiLCJ2YWx1ZSIsInJlZ2lzdGVyX21vZGVscyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBRUE7O0FBRkEsTUFBTUEsYUFBYUMsUUFBUSx5QkFBUixDQUFuQjtBQUNBLE1BQU1DLGFBQWEsT0FBT0MsTUFBUCxLQUFrQixXQUFsQixHQUFnQ0MsTUFBaEMsR0FBeUNELE1BQTVEOzs7QUFLQTs7Ozs7O0FBTUEsTUFBTUUsY0FBTixTQUE2QkgsV0FBV0ksS0FBeEMsQ0FBOEM7QUFDNUNDLGNBQVlDLE9BQVosRUFBcUJDLFFBQXJCLEVBQStCO0FBQzdCO0FBQ0EsUUFBSUMsV0FBV0MsV0FBZixFQUE0QjtBQUMxQixXQUFLQyxRQUFMLENBQWM7QUFDWkMsWUFBSUMscUJBQVVDLElBQVYsQ0FBZSxZQUFmLENBRFE7QUFFWkMsY0FBTVIsT0FGTTtBQUdaUyxlQUFPUjtBQUhLLE9BQWQ7QUFLRDtBQUNGO0FBVjJDOztrQkFjL0JKLGM7O0FBQ2ZMLFdBQVdrQixlQUFYLENBQTJCLENBQUNiLGNBQUQsQ0FBM0IiLCJmaWxlIjoiVGltZVNlcmllc0RhdGEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBzcGluYWxDb3JlID0gcmVxdWlyZShcInNwaW5hbC1jb3JlLWNvbm5lY3RvcmpzXCIpO1xuY29uc3QgZ2xvYmFsVHlwZSA9IHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWwgOiB3aW5kb3c7XG5pbXBvcnQge1xuICBVdGlsaXRpZXNcbn0gZnJvbSBcIi4uL1V0aWxpdGllc1wiO1xuXG4vKipcbiAqXG4gKlxuICogQGNsYXNzIFRpbWVTZXJpZXNEYXRhXG4gKiBAZXh0ZW5kcyB7TW9kZWx9XG4gKi9cbmNsYXNzIFRpbWVTZXJpZXNEYXRhIGV4dGVuZHMgZ2xvYmFsVHlwZS5Nb2RlbCB7XG4gIGNvbnN0cnVjdG9yKGFyZ0RhdGUsIGFyZ1ZhbHVlKSB7XG4gICAgc3VwZXIoKTtcbiAgICBpZiAoRmlsZVN5c3RlbS5fc2lnX3NlcnZlcikge1xuICAgICAgdGhpcy5hZGRfYXR0cih7XG4gICAgICAgIGlkOiBVdGlsaXRpZXMuZ3VpZChcIlRpbWVTZXJpZXNcIiksXG4gICAgICAgIGRhdGU6IGFyZ0RhdGUsXG4gICAgICAgIHZhbHVlOiBhcmdWYWx1ZVxuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgVGltZVNlcmllc0RhdGE7XG5zcGluYWxDb3JlLnJlZ2lzdGVyX21vZGVscyhbVGltZVNlcmllc0RhdGFdKTsiXX0=
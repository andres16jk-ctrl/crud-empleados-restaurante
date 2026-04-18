import { useMemo, useState, type ChangeEvent } from "react";
import type { Employee } from "../types/Employee";

interface EmployeeListProps {
  employees: Employee[];
  onDeleteEmployee: (id: string) => void;
  onEditEmployee: (employee: Employee) => void;
  onClearEmployees: () => void;
}

function EmployeeList({
  employees,
  onDeleteEmployee,
  onEditEmployee,
  onClearEmployees,
}: EmployeeListProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedArea, setSelectedArea] = useState("");

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleAreaChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedArea(event.target.value);
  };

  const areas = useMemo(() => {
    const uniqueAreas = [...new Set(employees.map((employee) => employee.area))];
    return uniqueAreas.sort();
  }, [employees]);

  const filteredEmployees = useMemo(() => {
    const term = searchTerm.toLowerCase().trim();

    return employees.filter((employee) => {
      const matchesSearch =
        employee.nombre.toLowerCase().includes(term) ||
        employee.area.toLowerCase().includes(term);

      const matchesArea =
        selectedArea === "" || employee.area === selectedArea;

      return matchesSearch && matchesArea;
    });
  }, [employees, searchTerm, selectedArea]);

  return (
    <div className="employee-list">
      <h2>Lista de empleados</h2>
      <p>Total de empleados: {employees.length}</p>

      <div className="filters-container">
        <div className="search-group">
          <label htmlFor="searchEmployee">Buscar por nombre o área</label>
          <input
            type="text"
            id="searchEmployee"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Ej: Pepe o Cocina"
          />
        </div>

        <div className="filter-group">
          <label htmlFor="filterArea">Filtrar por área</label>
          <select
            id="filterArea"
            value={selectedArea}
            onChange={handleAreaChange}
          >
            <option value="">Todas las áreas</option>
            {areas.map((area) => (
              <option key={area} value={area}>
                {area}
              </option>
            ))}
          </select>
        </div>
      </div>

      {employees.length > 0 && (
        <button className="clear-button" onClick={onClearEmployees}>
          Limpiar todos los empleados
        </button>
      )}

      {filteredEmployees.length === 0 ? (
        <p>
          {employees.length === 0
            ? "No hay empleados registrados."
            : "No se encontraron empleados con los filtros seleccionados."}
        </p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Área</th>
              <th>Salario</th>
              <th>Fecha inicio</th>
              <th>Fecha fin</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {filteredEmployees.map((employee) => (
              <tr
                key={employee.id}
                className={new Date(employee.fechaFin) < new Date() ? "expired" : ""}
              >
                <td>{employee.nombre}</td>
                <td>{employee.area}</td>
                <td>${employee.salario.toLocaleString("es-CO")}</td>
                <td>{new Date(employee.fechaInicio).toLocaleDateString()}</td>
                <td>{new Date(employee.fechaFin).toLocaleDateString()}</td>
                <td className="actions-cell">
                  <button
                    className="edit-button"
                    onClick={() => onEditEmployee(employee)}
                  >
                    Editar
                  </button>
                  <button
                    className="delete-button"
                    onClick={() => onDeleteEmployee(employee.id)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default EmployeeList;
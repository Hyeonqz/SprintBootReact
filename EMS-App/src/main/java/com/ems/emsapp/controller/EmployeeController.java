package com.ems.emsapp.controller;

import com.ems.emsapp.dto.EmployeeDto;
import com.ems.emsapp.service.EmployeeService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@CrossOrigin("*")
@RequestMapping("/api/employees")
@AllArgsConstructor
@RestController
public class EmployeeController {

    //Pathvariable
    //RequestParam

    private final EmployeeService employeeService;

    @PostMapping()
    public ResponseEntity<EmployeeDto> createEmployee(@RequestBody EmployeeDto employeeDto) {
        EmployeeDto saveEmployee = employeeService.createEmployee(employeeDto);
        return new ResponseEntity<>(saveEmployee, HttpStatus.CREATED);
    }

    @GetMapping()
    public ResponseEntity<EmployeeDto> getEmployeeById(@RequestParam(required = false, defaultValue = "0")  Long employeeId) {
        EmployeeDto employeeDto = employeeService.getEmployeeById(employeeId);
        return new ResponseEntity<>(employeeDto, HttpStatus.OK);
    }

    //Build Get All Employees
    @GetMapping("/search")
    public ResponseEntity<List<EmployeeDto>> getAllEmployees() {
        List<EmployeeDto> employees = employeeService.getAllEmployees();
        return ResponseEntity.ok(employees);
    }

    //update
    @PutMapping("{id}")
    public ResponseEntity<EmployeeDto> updateEmployee(@PathVariable("id") Long employeeId,
                                                      @RequestBody EmployeeDto updateemployeeDto) {

        EmployeeDto employeeDto = employeeService.updateEmployee(employeeId, updateemployeeDto);

        return ResponseEntity.ok(employeeDto);
    }

    //delete

    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteEmployee(@PathVariable("id") Long employeeId) {
        employeeService.deleteEmployee(employeeId);
        return ResponseEntity.ok("Employee deleted successfully");
    }
}




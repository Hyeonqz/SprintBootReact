package com.ems.emsapp.service.impl;

import com.ems.emsapp.dto.EmployeeDto;
import com.ems.emsapp.entity.Employee;
import com.ems.emsapp.exception.ResourceNotFoundException;
import com.ems.emsapp.mapper.EmployeeMapper;
import com.ems.emsapp.repository.EmployeeRepository;
import com.ems.emsapp.service.EmployeeService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class EmployeeServiceImpl implements EmployeeService {

    private final EmployeeRepository employeeRepository;

    @Override
    public EmployeeDto createEmployee(EmployeeDto employeeDto) {

        Employee employee = EmployeeMapper.mapToEmployee(employeeDto);
        Employee savedEmployee = employeeRepository.save(employee);

        return EmployeeMapper.mapToEmployeeDto(savedEmployee);
    }

    @Override
    public EmployeeDto getEmployeeById(Long employeeId) {

        Employee employee = employeeRepository.findById(employeeId)
                .orElseThrow(() -> new ResourceNotFoundException("Employee is not exist with given Id : " + employeeId));

        return EmployeeMapper.mapToEmployeeDto(employee);
    }
}

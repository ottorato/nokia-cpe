package com.rato.basic.service;

import com.rato.basic.model.CPEData;

public interface CPEDataService extends BasicServices<CPEData>  {

	CPEData findLastCPEDataByCPEId(Long id);

	CPEData findTopByCpeIdOrderByDateDesc(Long id);

}

import { Controller, Get, Query} from '@nestjs/common';
import { SearchService } from './search.service';
import { ApiQuery, ApiTags, ApiOkResponse  } from '@nestjs/swagger';

@ApiTags('Search Query')
@Controller('/api/v1/applications/search')
export class SearchController {
  constructor(private readonly searchService: SearchService) {}

  @Get('ic')
  searchByIC(
      @Query('q') q: string,
      @Query('page') page = 1,
      @Query('limit') limit = 10,
    ) {
    return this.searchService.searchByIC(q, +page, +limit);
  }

  @Get('vessel')
    searchByVesselNo(
      @Query('q') q: string,
      @Query('page') page = 1,
      @Query('limit') limit = 10,
    ) {
    return this.searchService.searchVesselNo(q, +page, +limit);
  }
}

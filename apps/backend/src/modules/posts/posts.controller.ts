import { FindOneParam } from '@/common/dto/find-one-param.dto';
import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PostEntity } from './entities/post.entity';
import { PostsService } from './posts.service';

@Controller('/api/posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post()
  async create(@Body() createPostDto: CreatePostDto): Promise<PostEntity> {
    return new PostEntity(await this.postsService.create(createPostDto));
  }

  @Delete(':id')
  async delete(@Param() { id }: FindOneParam): Promise<PostEntity> {
    return new PostEntity(await this.postsService.delete(id));
  }

  @Get('')
  async findAll(): Promise<PostEntity[]> {
    const posts = await this.postsService.findAll({});
    return posts.map(post => new PostEntity(post));
  }

  @Get('filtered-posts/:searchString')
  async findFilteredPosts(@Param('searchString') searchString: string): Promise<PostEntity[]> {
    const posts = await this.postsService.findAll({
      where: {
        OR: [
          {
            title: { contains: searchString },
          },
          {
            content: { contains: searchString },
          },
        ],
      },
    });

    return posts.map(post => new PostEntity(post));
  }

  @Get(':id')
  async findOne(@Param() { id }: FindOneParam): Promise<PostEntity> {
    return new PostEntity(await this.postsService.findOne(id));
  }

  @Get('feed')
  async findPublishedPosts(): Promise<PostEntity[]> {
    const posts = await this.postsService.findAll({
      where: { published: true },
    });
    return posts.map(post => new PostEntity(post));
  }

  @Patch('publish/:id')
  async publishPost(@Param() { id }: FindOneParam): Promise<PostEntity> {
    return new PostEntity(
      await this.postsService.update({
        data: { published: true },
        where: { id },
      }),
    );
  }

  @Patch(':id')
  async update(@Param() { id }: FindOneParam, @Body() updatePostDto: UpdatePostDto): Promise<PostEntity> {
    return new PostEntity(
      await this.postsService.update({
        data: updatePostDto,
        where: { id },
      }),
    );
  }
}
